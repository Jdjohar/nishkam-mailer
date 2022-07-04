CREATE TABLE students(
   id BIGSERIAL PRIMARY KEY NOT NULL,
   stuname          VARCHAR(255) NOT NULL
  ,stuemail         VARCHAR(255) NOT NULL
  ,stumobile         VARCHAR(255) NOT NULL
  ,lgpassword VARCHAR(255) NOT NULL
  ,mobileotp VARCHAR(255) NOT NULL
  ,mobileotpvalidtime VARCHAR(255) NOT NULL
  ,emailotp VARCHAR(255) NOT NULL
  ,emailotpvalidtime VARCHAR(255) NOT NULL
  ,loginwith VARCHAR(255) NOT NULL
  ,socialid VARCHAR(255) NOT NULL
  ,loginip VARCHAR(255) NOT NULL
  ,lastlogin VARCHAR(255) NOT NULL
  ,registertime VARCHAR(255) NOT NULL
  ,createdat VARCHAR(255) NOT NULL
  ,updateat       VARCHAR(255) NOT NULL
);


INSERT INTO students (stuname,stuemail,stumobile,lgpassword,mobileotp,mobileotpvalidtime ,emailotp ,emailotpvalidtime ,loginwith ,socialid ,loginip ,lastlogin ,registertime ,createdat ,updateat) VALUES('Jashandeep Singh','jdeep514@gmail.com','9041619321','123456','asdf','mobileotpvalidtime' ,'emailotp' ,'emailotpvalidtime' ,'loginwith' ,'socialid' ,'loginip' ,'lastlogin' ,'registertime' ,'createdat' ,'updateat');
