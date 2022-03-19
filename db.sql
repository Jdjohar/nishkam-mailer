CREATE TABLE subscribelist(
   id BIGSERIAL PRIMARY KEY NOT NULL,
   donarname          VARCHAR(255) NOT NULL
  ,donaremail1         VARCHAR(255) NOT NULL
  ,donaremail2         VARCHAR(255) NOT NULL
  ,donarsubscribe VARCHAR(255) NOT NULL
  ,unsubscribe VARCHAR(255) NOT NULL
  ,donarip       VARCHAR(255) NOT NULL
);


INSERT INTO subscribelist (donarname, donaremail1, donaremail2, donarsubscribe,unsubscribe,donarip) VALUES('Jashandeep Singh', 'jdeep514@gmail.com', '', 0, '0', '172.168.12.12');
INSERT INTO subscribelist (donarname, donaremail1, donaremail2, donarsubscribe,unsubscribe,donarip) VALUES('Manav Singh', 'manavsingh839@gmail.com', '', 0, '0', '172.168.12.12');
INSERT INTO subscribelist (donarname, donaremail1, donaremail2, donarsubscribe,unsubscribe,donarip) VALUES('Harmit Kamboe', 'hkamboe@gmail.com', '', 0, '0', '172.168.12.12');
INSERT INTO subscribelist (donarname, donaremail1, donaremail2, donarsubscribe,unsubscribe,donarip) VALUES('Gopal SIngh', 'gopal@sagassociates.com', '', 0, '0', '172.168.12.12');
INSERT INTO subscribelist (donarname, donaremail1, donaremail2, donarsubscribe,unsubscribe,donarip) VALUES('Parvinder SIngh', 'psarora@gmail.com', '', 0, '0', '172.168.12.12');
INSERT INTO subscribelist (donarname, donaremail1, donaremail2, donarsubscribe,unsubscribe,donarip) VALUES('Karamjeet Singh Mann', 'karamjitmann@gmail.com', '', 0, '0', '172.168.12.12');
