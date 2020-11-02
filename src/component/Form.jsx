import React from 'react'

 function Form() {
    return (
        <>
            <form action="" class="form">
      
      <div class="row">
        <div class="col">
          <div class="form-group">
            <label for="firstname">First name</label>
            <input
              type="text"
              name="firstname"
              id="firstname"
              class="form-control"
              placeholder="first name"
              required
            />
          </div>
        </div>
        <div class="col">
          <div class="form-group">
            <label for="lastname">Last name</label>
            <input
              type="text"
              name="lastname"
              id="lastname"
              class="form-control"
              placeholder="last name"
              required
            />
          </div>
        </div>
      </div>
     
      <div class="form-group">
        <label for="number">Number</label>
        <input
          type="number"
          name="number"
          id="number"
          class="form-control"
          placeholder="+910122344589"
          required
        />
      </div>
      <div class="text-area form-group">
        <label for="text"><strong>Message</strong></label>
        <textarea
          name="text"
          id=""
          cols="80"
          rows="5"
          placeholder="Your message"
          class="form-control"
        ></textarea>
      </div>
     
      <button type="submit" class="btn btn-primary btn-block">Submit</button>
    </form>
        </>
    )
}
export default Form