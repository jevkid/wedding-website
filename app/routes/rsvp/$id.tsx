import invariant from 'tiny-invariant';
import {
  redirect,
  Form,
  useActionData,
  useTransition,
  useLoaderData,
} from 'remix';
import { getGuestById, updateGuest } from '~/guests';
import React from 'react';
import { DietReqForm } from '~/components/dietRequirements';
import { MealForm } from '~/components/meals';
import { AccomForm } from '~/components/accommodation';

export let loader = async ({ params }: any) => {
  invariant(params.id, 'expected params.id');
  return getGuestById(params.id);
};

export let action = async ({ request }: any) => {
  let formData = await request.formData();
  // Guest data
  const guestId = formData.get('guestId');
  const rsvp = formData.get('rsvp');
  const diet = formData.get('dietary-req');
  const dietOther = formData.get('dietary-req-other');
  const meal = formData.get('meal');
  const accom = formData.get('accom');
  const notes = formData.get('notes');

  // Plus one data
  const plusOneId = formData.get('plusOneId');
  const rsvpPlusOne = formData.get('rsvp-plus-one');
  const dietPlusOne = formData.get('dietary-req-plus-one');
  const dietOtherPlusOne = formData.get('dietary-req-other-plus-one');
  const mealPlusOne = formData.get('meal-plus-one');
  const accomPlusOne = formData.get('accom-plus-one');
  const notesPlusOne = formData.get('notes-plus-one');

  let errors: { name?: boolean; slug?: boolean } = {};

  if (!guestId) errors.name = true;

  if (Object.keys(errors).length) {
    return errors;
  }

  await updateGuest(guestId, rsvp, diet, dietOther, meal, accom, notes);

  if (plusOneId) {
    await updateGuest(
      plusOneId,
      rsvpPlusOne,
      dietPlusOne,
      dietOtherPlusOne,
      mealPlusOne,
      accomPlusOne,
      notesPlusOne
    );
  }

  return redirect(`/rsvp/${guestId}/success`);
};

export default function NewGuest() {
  const { guest, plusOne } = useLoaderData();
  let errors = useActionData();
  let transition = useTransition();
  const lastStep = 4;
  const [step, setStep] = React.useState(0);
  const [guestAttending, setGuestAttending] = React.useState(
    guest.rsvp === 'yes' || false
  );
  const [plusOneAttending, setPlusOneAttending] = React.useState(
    plusOne?.rsvp === 'yes' || false
  );

  return (
    <Form method="post">
      {/* 0. RSVP */}
      <div className={`guest__form--rsvp${step !== 0 ? '--hidden' : ''}`}>
        <h1 className="section-title">RSVP</h1>
        <div className="rsvp__form">
          <input type="hidden" name="guestId" value={guest.id} />
          <h1 className="title">{guest?.guest_name}</h1>
          <div className="checkbox__container">
            <input
              id="yes"
              type="radio"
              name="rsvp"
              value="yes"
              defaultChecked={guest.rsvp === 'yes'}
              onChange={() => setGuestAttending(true)}
            />
            <label htmlFor="yes">Attending</label>
            <input
              id="no"
              type="radio"
              name="rsvp"
              value="no"
              defaultChecked={guest.rsvp === 'no'}
              onChange={() => setGuestAttending(false)}
            />
            <label htmlFor="no">Unable to attend</label>
          </div>
        </div>

        {plusOne && (
          <div className="rsvp__form">
            <input type="hidden" name="plusOneId" value={plusOne.id} />
            <h1 className="title">{plusOne?.guest_name}</h1>
            <div className="checkbox__container">
              <input
                id="yes-plus-one"
                type="radio"
                name="rsvp-plus-one"
                value="yes"
                defaultChecked={plusOne.rsvp === 'yes'}
                onChange={() => setPlusOneAttending(true)}
              />
              <label htmlFor="yes-plus-one">Attending</label>
              <input
                id="no-plus-one"
                type="radio"
                name="rsvp-plus-one"
                value="no"
                defaultChecked={plusOne.rsvp === 'no'}
                onChange={() => setPlusOneAttending(false)}
              />
              <label htmlFor="no-plus-one">Unable to attend</label>
            </div>
          </div>
        )}
      </div>
      {/* 1. Dietary restrictions */}
      <div className={`diet__form${step !== 1 ? '--hidden' : ''}`}>
        <h1 className="section-title">Dietary restrictions</h1>
        {guestAttending && <DietReqForm guestName={guest.guest_name} />}
        {plusOneAttending && (
          <DietReqForm guestName={plusOne.guest_name} isPlusOne={true} />
        )}
      </div>
      {/* 2. Meal choice */}
      <div className={`meal__form${step !== 2 ? '--hidden' : ''}`}>
        <h1 className="section-title">Meal selection</h1>
        {guestAttending && <MealForm guestName={plusOne.guest_name} />}
        {plusOneAttending && (
          <MealForm guestName={plusOne.guest_name} isPlusOne={true} />
        )}
      </div>
      {/* 3. Accommodation? */}
      <div className={`accom__form${step !== 3 ? '--hidden' : ''}`}>
        <h1 className="section-title">Accommodation</h1>
        {guestAttending && (
          <AccomForm
            guestName={guest.guest_name}
            plusOneName={plusOne.guest_name}
          />
        )}
      </div>
      {/* 4. Notes */}
      <div className={`notes__form${step !== 4 ? '--hidden' : ''}`}>
        <h1 className="section-title">Anything else we should know?</h1>
        <p></p>
        {plusOne && <p>notes</p>}
      </div>
      {step === lastStep && (
        <div className="button__container">
          <button type="submit" disabled={step !== lastStep}>
            {transition.submission ? 'Submitting...' : 'Submit'}
          </button>
        </div>
      )}
      {step < lastStep && (
        <div className="button__container">
          <button
            type="button"
            onClick={() => {
              if (!guestAttending && !plusOneAttending) {
                setStep(lastStep);
              } else if (step < lastStep) {
                setStep(step + 1);
              } else {
                return false;
              }
            }}
          >
            {transition.submission ? 'Searching...' : 'Continue'}
          </button>
        </div>
      )}
    </Form>
  );
}
