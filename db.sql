CREATE TABLE subscribelist(
   id BIGSERIAL PRIMARY KEY NOT NULL,
   donarname          VARCHAR(255) NOT NULL
  ,donaremail1         VARCHAR(255) NOT NULL
  ,donaremail2         VARCHAR(255) NOT NULL
  ,donarsubscribe VARCHAR(255) NOT NULL
  ,unsubscribe VARCHAR(255) NOT NULL
  ,donarip       VARCHAR(255) NOT NULL
);


INSERT INTO subscribelist (donarname, donaremail1, donaremail2, donarsubscribe,unsubscribe,donarip) VALUES('jashan', 'jdeep514@gmail.com', 'jashandeep115@gmail.com', 0, '0', '172.168.12.12');
INSERT INTO subscribelist (donarname, donaremail1, donaremail2, donarsubscribe,unsubscribe,donarip) VALUES('Manav', 'manavsingh839@gmail.com', 'jashandeep115@gmail.com', 0, '0', '172.168.12.12');
INSERT INTO subscribelist (donarname, donaremail1, donaremail2, donarsubscribe,unsubscribe,donarip) VALUES('Harmit', 'hkamboe@gmail.com', 'jashandeep115@gmail.com', 0, '0', '172.168.12.12');
