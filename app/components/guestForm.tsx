import { GuestsModel } from '~/types';

export default function GuestForm(guest: GuestsModel, step: number) {
  <div>
    <h1>{guest?.guest_name}</h1>
    <input type="hidden" name="guestId" value={guest.id} />
    {/* 0. RSVP */}
    <div className={`checkbox__container${step !== 0 ? '--hidden' : ''}`}>
      <input
        id="yes"
        type="radio"
        name="rsvp"
        value="yes"
        defaultChecked={guest.rsvp === 'yes'}
      />
      <label htmlFor="yes">Attending</label>
      <input
        id="no"
        type="radio"
        name="rsvp"
        value="no"
        defaultChecked={guest.rsvp === 'no'}
      />
      <label htmlFor="no">Unable to attend</label>
    </div>
    {/* 1. Dietary restrictions */}
    <div className={`diet__container${step !== 1 ? '--hidden' : ''}`}>
      <h4>Dietary restrictions</h4>
    </div>
    {/* 2. Meal choice */}
    <div className={`meal__container${step !== 2 ? '--hidden' : ''}`}>
      <h4>Meal selection</h4>
    </div>
    {/* 3. Accommodation? */}
    <div className={`accom__container${step !== 3 ? '--hidden' : ''}`}>
      <h4>Accommodation</h4>
    </div>
    {/* 4. Notes */}
    <div className={`notes__container${step !== 4 ? '--hidden' : ''}`}>
      <h4>Notes</h4>
    </div>
  </div>;
}
