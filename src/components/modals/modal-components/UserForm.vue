<template>
  <div class="user-form">
    <div class="user-form-input">
      <p>Name</p>
      <p>Andy Tran</p>
    </div>
    <div class="user-form-input">
      <p>Driver's License #</p>
      <p>F7373968</p>
    </div>
    <div class="user-form-input">
      <p>Phone Number</p>
      <p>(714) 696-2657</p>
    </div>
    <div class="user-form-input">
      <p>Email</p>
      <p>contact@andyktran.com</p>
    </div>
  </div>
</template>

<style>
.user-form {
  display: grid;
  width: 100%;
}

.user-form-input {
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 10px 20px;
  border-top: 1px solid #d4d4d4;
}

.user-form-input:last-of-type {
  border-bottom: 1px solid #d4d4d4;
}

.user-form-input p {
  font-size: 0.8rem;
  font-weight: 300;
}

.user-form-input p:last-of-type {
  font-size: 0.9rem;
  font-weight: 500;
}

/* .user-form-input input {
  appearance: none;
  border: none;
  background-color: transparent;
  font-size: 0.9rem;
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden; 
  text-overflow: ellipsis; 
} */

/* .user-form-input input::placeholder {
  font-weight: 400;
  opacity: 0.5;
} */

@media screen and (min-width: 768px) {
  .user-form {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto;
  }

  .user-form-input:nth-of-type(1) {
    border-right: 1px solid #d4d4d4;
  }

  .user-form-input:nth-of-type(3) {
    border-right: 1px solid #d4d4d4;
    /* border-bottom: 1px solid #d4d4d4; */
  }
  .user-form-input:nth-of-type(4) {
    border-bottom: none;
  }
}
</style>
