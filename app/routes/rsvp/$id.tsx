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

export let loader = async ({ params }: any) => {
  invariant(params.id, 'expected params.id');
  return getGuestById(params.id);
};

export let action = async ({ request }: any) => {
  let formData = await request.formData();
  let guestId = formData.get('guestId');
  let plusOneId = formData.get('plusOneId');
  let rsvp = formData.get('rsvp');
  let rsvpPlusOne = formData.get('rsvp-plus-one');
  // dietary_req, meal_choice, accom_req, notes

  let errors: { name?: boolean; slug?: boolean } = {};

  if (!guestId) errors.name = true;

  if (Object.keys(errors).length) {
    return errors;
  }

  await updateGuest(guestId, rsvp);

  return redirect(`/rsvp/${guestId}/success`);
};

export default function NewGuest() {
  const { guest, plusOne } = useLoaderData();
  let errors = useActionData();
  let transition = useTransition();
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
        {guestAttending && (
          <p>
            <h3 className="subtitle">{guest?.guest_name}</h3>
            <div className="checkbox__container">
              <input id="vegan" type="checkbox" name="vegan" value="vegan" />
              <label htmlFor="vegan">Vegan</label>
              <input
                id="vegetarian"
                type="checkbox"
                name="vegetarian"
                value="vegetarian"
              />
              <label htmlFor="vegetarian">Vegetarian</label>
              <input
                id="gluten-free"
                type="checkbox"
                name="gluten-free"
                value="gluten-free"
              />
              <label htmlFor="gluten-free">Gluten free</label>
              <input
                id="dairy-free"
                type="checkbox"
                name="dairy-free"
                value="dairy-free"
              />
              <label htmlFor="dairy-free">Dairy free</label>
            </div>
          </p>
        )}
        {plusOneAttending && (
          <p>
            <h3 className="subtitle">{plusOne?.guest_name}</h3>
            <div className="checkbox__container">
              <input
                id="vegan-plus-one"
                type="checkbox"
                name="vegan-plus-one"
                value="vegan"
              />
              <label htmlFor="vegan-plus-one">Vegan</label>
              <input
                id="vegetarian-plus-one"
                type="checkbox"
                name="vegetarian-plus-one"
                value="vegetarian"
              />
              <label htmlFor="vegetarian-plus-one">Vegetarian</label>
              <input
                id="gluten-free-plus-one"
                type="checkbox"
                name="gluten-free-plus-one"
                value="gluten-free"
              />
              <label htmlFor="gluten-free-plus-one">Gluten free</label>
              <input
                id="dairy-free-plus-one"
                type="checkbox"
                name="dairy-free-plus-one"
                value="dairy-free"
              />
              <label htmlFor="dairy-free-plus-one">Dairy free</label>
            </div>
          </p>
        )}
      </div>
      {/* 2. Meal choice */}
      <div className={`meal__form${step !== 2 ? '--hidden' : ''}`}>
        <h4>Meal selection</h4>
        {guestAttending && <p>Show meal options</p>}
        {plusOneAttending && <p>Show meal options</p>}
      </div>
      {/* 3. Accommodation? */}
      <div className={`accom__form${step !== 3 ? '--hidden' : ''}`}>
        <h4>Accommodation</h4>
        {guestAttending && <p>Show accom options</p>}
        {plusOneAttending && <p>Show accom options</p>}
      </div>
      {/* 4. Notes */}
      <div className={`notes__form${step !== 4 ? '--hidden' : ''}`}>
        <h4>Notes</h4>
        <p>notes</p>
        {plusOne && <p>notes</p>}
      </div>
      {step === 4 && (
        <div className="button__container">
          <button type="submit" disabled={step !== 4}>
            {transition.submission ? 'Submitting...' : 'Submit'}
          </button>
        </div>
      )}
      {step < 4 && (
        <div className="button__container">
          <button
            type="button"
            onClick={() => {
              if (!guestAttending && !plusOneAttending) {
                setStep(4);
              } else if (step < 4) {
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
