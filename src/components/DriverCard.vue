<template>
  <div class="driver-card">
    <div class="driver-card-new">Recently Added</div>
    <div class="driver-card-edit">
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 0H22C31.9411 0 40 8.05887 40 18V40H20C8.95431 40 0 31.0457 0 20V0Z"
          fill="#DBDBDB"
        />
        <path
          d="M28.7586 14.732L25.268 11.2406C25.1519 11.1245 25.0141 11.0324 24.8624 10.9696C24.7107 10.9067 24.5482 10.8744 24.384 10.8744C24.2198 10.8744 24.0572 10.9067 23.9056 10.9696C23.7539 11.0324 23.6161 11.1245 23.5 11.2406L13.8664 20.875C13.7498 20.9907 13.6574 21.1283 13.5945 21.28C13.5316 21.4317 13.4995 21.5944 13.5 21.7586V25.25C13.5 25.5815 13.6317 25.8995 13.8661 26.1339C14.1005 26.3683 14.4185 26.5 14.75 26.5H18.2414C18.4056 26.5005 18.5683 26.4684 18.72 26.4055C18.8717 26.3426 19.0094 26.2502 19.125 26.1336L28.7586 16.5C28.8747 16.3839 28.9668 16.2461 29.0296 16.0944C29.0925 15.9428 29.1248 15.7802 29.1248 15.616C29.1248 15.4518 29.0925 15.2893 29.0296 15.1376C28.9668 14.9859 28.8747 14.8481 28.7586 14.732ZM26 17.4906L22.5086 14L24.3836 12.125L27.875 15.6156L26 17.4906Z"
          fill="black"
        />
      </svg>
    </div>
    <div class="driver-card-col-1">
      <div class="headshot">
        <img src="../assets/images/headshot1.png" />
      </div>
      <div class="driver-card-form-entry">
        <p>License #</p>
        <p>F3FFK309</p>
      </div>
    </div>
    <div class="driver-card-col-2">
      <div class="driver-card-form-entry">
        <p>Name</p>
        <p>Janice Carr</p>
      </div>
      <div class="driver-card-form-entry">
        <p>Email</p>
        <p>jac@gmail.com</p>
      </div>
      <div class="driver-card-form-entry">
        <p>Phone Number</p>
        <p>(661) 271-1040</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.driver-card {
  display: flex;
  height: 257px;
  border-radius: 18px;
  background-color: #e8e8e8;
  position: relative;
  max-width: 100%;
  /* padding: 4px 0px; */
}

.driver-card-new {
  border-radius: 40px 40px 40px 0px;
  background-color: #dbcd2c;
  position: absolute;
  padding: 6px 20px;
  font-size: 14px;
  top: -4px;
}

.driver-card-edit {
  position: absolute;
  top: 0;
  right: 0;
}

.driver-card-col-1 {
  width: 140px;
  height: 100%;
  border-right: 1px solid #d9d9d9;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.headshot {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.driver-card-col-2 {
  height: 100%;
  flex-grow: 2;
  display: flex;
  flex-direction: column;
  max-width: calc(100% - 140px);
  /* width: 100%; */
}

.driver-card-col-2 .driver-card-form-entry:first-of-type {
  border-top: none;
}

.driver-card-form-entry {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 16px 20px;
  border-top: 1px solid #d9d9d9;
}

.driver-card-form-entry p:first-of-type {
  font-size: 14px;
  font-weight: 300;
}

.driver-card-form-entry p:last-of-type {
  font-size: 16px;
  font-weight: 500;
  white-space: nowrap; /* Prevent text from wrapping to the next line */
  overflow: hidden; /* Hide the overflowed text */
  text-overflow: ellipsis; /* Display ellipsis (...) when text overflows */
}
</style>
