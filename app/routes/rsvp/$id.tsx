import invariant from 'tiny-invariant';
import {
  redirect,
  Form,
  useActionData,
  useTransition,
  useLoaderData,
} from 'remix';
import { getGuestById, updateGuest } from '~/guests';
import {
  date,
  venue,
  arrivalTime,
  ceremonyTime,
  receptionTime,
  starters,
  mains,
  desserts,
} from '../../constants';
import { format } from 'date-fns';
import React from 'react';
import { DietReqForm } from '~/components/dietRequirements';
import { MealForm } from '~/components/meals';
import { AccomForm } from '~/components/accommodation';
import { RadioField } from '~/components/formElements/radio';
import { GuestsModel } from '~/types';
import { TextArea } from '~/components/formElements/textArea';

export let loader = async ({ params }: any) => {
  invariant(params.id, 'expected params.id');
  return getGuestById(params.id);
};

export let action = async ({ request }: any) => {
  let formData = await request.formData();
  // Guest data
  const guestId = formData.get('guest_id');
  const guestName = formData.get('guest_name');
  const plusOneName = formData.get('plus_one_name');
  const rsvp = formData.get('rsvp');
  const diet = formData.get('dietary-req');
  const dietOther = formData.get('dietary-req-other');
  const meal = formData.get('meal-choice');
  const accom = formData.get('accom-req');
  const email = formData.get('email');
  const emptyPlusOne = formData.get('empty_plus_one');

  // Plus one data
  const plusOneId = formData.get('plusOneId');
  const rsvpPlusOne = formData.get('rsvp-plus-one');
  const dietPlusOne = formData.get('dietary-req-plus-one');
  const dietOtherPlusOne = formData.get('dietary-req-other-plus-one');
  const mealPlusOne = formData.get('meal-choice-plus-one');
  const accomPlusOne = formData.get('accom-req');

  let errors: { name?: boolean; slug?: boolean } = {};

  if (!guestId) errors.name = true;

  if (Object.keys(errors).length) {
    return errors;
  }

  await updateGuest(
    guestId,
    guestName,
    rsvp,
    diet,
    dietOther,
    meal,
    accom,
    plusOneName,
    email,
    emptyPlusOne === ''
  );

  if (plusOneId) {
    await updateGuest(
      plusOneId,
      plusOneName,
      rsvpPlusOne,
      dietPlusOne,
      dietOtherPlusOne,
      mealPlusOne,
      accomPlusOne
    );
  }

  return redirect(`/rsvp/${guestId}/success`);
};

export default function NewGuest() {
  const { guest, plusOne }: { guest: GuestsModel; plusOne: GuestsModel } =
    useLoaderData();
  let errors = useActionData();
  let transition = useTransition();
  const lastStep = 5;
  const [step, setStep] = React.useState(0);
  const [guestAttending, setGuestAttending] = React.useState(
    guest.rsvp === 'yes' || false
  );
  const [plusOneAttending, setPlusOneAttending] = React.useState(
    plusOne?.rsvp === 'yes' || false
  );
  const [plusOneName, setEmptyPlusOneName] = React.useState(
    plusOne?.guest_name || ''
  );

  return (
    <Form method="post">
      {/* 0. RSVP */}
      <div className="rsvp__details">
        <p>
          We would love for you to join us in the celebration of our marriage on{' '}
          <span>{format(date, 'MMMM do, yyyy')}</span> at{' '}
          <span>{venue.venueName}.</span>{' '}
        </p>
        <p>
          Guests to arrive at <span>{format(arrivalTime, 'h:mmaa')}</span>- the
          ceremony will begin at <span>{format(ceremonyTime, 'h:mmaa')}</span>,
          followed by dinner, drinks, and dancing. Carriages at{' '}
          <span>midnight</span>.
        </p>
      </div>
      <div className={`guest__form--rsvp${step !== 0 ? '--hidden' : ''}`}>
        <div className="rsvp__form">
          <input type="hidden" name="guest_id" value={guest.id} />
          <input type="hidden" name="guest_name" value={guest.guest_name} />
          <h1 className="title">{guest.guest_name}</h1>
          <div className="checkbox__container">
            <RadioField
              id="yes"
              name="rsvp"
              label="Attending"
              inputValue="yes"
              isChecked={guest.rsvp === 'yes'}
              plusOne={false}
              handleChange={() => setGuestAttending(true)}
            />
            <RadioField
              id="no"
              name="rsvp"
              inputValue="no"
              label="Unable to attend"
              isChecked={guest.rsvp === 'no'}
              plusOne={false}
              handleChange={() => setGuestAttending(false)}
            />
          </div>
        </div>

        {plusOne && (
          <div className="rsvp__form">
            <input type="hidden" name="plusOneId" value={plusOne.id} />
            <input
              type="hidden"
              name="plus_one_name"
              value={plusOne.guest_name}
            />
            {plusOneAttending && guest.empty_plus_one ? (
              <>
                <input
                  className="rsvp__form--plusOne"
                  type="text"
                  name="plus_one_name"
                  placeholder="Plus one's full name"
                  onChange={(e) => setEmptyPlusOneName(e.target.value)}
                />
                <input type="hidden" name="empty_plus_one" value="false" />
              </>
            ) : (
              <h1 className="title">{plusOne?.guest_name}</h1>
            )}
            {/* if the empty plus one is attending, replace the h1 with a text input field to input the plus one's name */}
            <div className="checkbox__container">
              <RadioField
                id="yes"
                name="rsvp"
                label="Attending"
                inputValue="yes"
                isChecked={plusOne.rsvp === 'yes'}
                plusOne={true}
                handleChange={() => setPlusOneAttending(true)}
              />
              <RadioField
                id="no"
                name="rsvp"
                inputValue="no"
                label="Unable to attend"
                isChecked={plusOne.rsvp === 'no'}
                plusOne={true}
                handleChange={() => setPlusOneAttending(false)}
              />
            </div>
          </div>
        )}
      </div>
      {/* 1. Dietary restrictions */}
      <div className={`diet__form${step !== 1 ? '--hidden' : ''}`}>
        <h1 className="section-title">Dietary restrictions</h1>
        {guestAttending && (
          <DietReqForm
            guestName={guest.guest_name}
            previousOptions={guest.dietary_req}
          />
        )}
        {plusOneAttending && (
          <DietReqForm
            guestName={plusOneName}
            isPlusOne={true}
            previousOptions={plusOne.dietary_req}
          />
        )}
      </div>
      {/* 2. Meal choice */}
      <div className={`meal__form${step !== 2 ? '--hidden' : ''}`}>
        <h1 className="section-title">Meal selection</h1>
        <hr />
        <h4>Starters</h4>
        <h5>{starters.one.long}</h5>
        <h5>{starters.two.long}</h5>
        <h4>Mains</h4>
        <h5>{mains.one.long}</h5>
        <h5>{mains.two.long}</h5>
        <h4>Desserts</h4>
        <h5>{desserts.one.long}</h5>
        <h5>{desserts.two.long}</h5>
        {guestAttending && (
          <MealForm
            guestName={guest.guest_name}
            previousOptions={guest.meal_choice}
          />
        )}
        {plusOneAttending && (
          <MealForm
            guestName={plusOneName}
            isPlusOne={true}
            previousOptions={plusOne.meal_choice}
          />
        )}
      </div>
      {/* 3. Accommodation? */}
      <div className={`accom__form${step !== 3 ? '--hidden' : ''}`}>
        <h1 className="section-title">Accommodation</h1>
        {guestAttending && (
          <AccomForm
            guestName={guest.guest_name}
            plusOneName={plusOneName}
            previousOption={guest.accom_req}
          />
        )}
      </div>
      {/* 4. Funny story */}
      <div className={`story__form${step !== 4 ? '--hidden' : ''}`}>
        <h1 className="section-title">
          Do you have a funny story about Megan and/or Simon? A cute anecdote?
          We'd love to hear it!
        </h1>
        <TextArea id="story" name="story" label="" />
      </div>
      {/* 5. Notes */}
      <div className={`notes__form${step !== 5 ? '--hidden' : ''}`}>
        <h1 className="section-title">
          Lastly, can we have your email to send an RSVP
        </h1>
        <label htmlFor="email">
          <input
            className="input"
            type="text"
            name="email"
            id="emailInput"
            placeholder="Email address"
          />
        </label>
      </div>
      <div className="button__container">
        {step !== 0 && (
          <button
            type="button"
            className="previous"
            onClick={() => {
              setStep(step - 1);
            }}
          >
            &larr; Previous
          </button>
        )}
        {step === lastStep && (
          <button type="submit" disabled={step !== lastStep}>
            {transition.submission ? 'Submitting...' : 'Submit'}
          </button>
        )}
        {step < lastStep && (
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
            Continue
          </button>
        )}
      </div>
    </Form>
  );
}
