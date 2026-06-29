SET SERVEROUTPUT ON;

CREATE TABLE Accounts (
    AccountID NUMBER PRIMARY KEY,
    CustomerName VARCHAR2(50),
    AccountType VARCHAR2(20),
    Balance NUMBER
);

INSERT INTO Accounts VALUES (101,'Rahul','Savings',10000);
INSERT INTO Accounts VALUES (102,'Priya','Current',15000);
INSERT INTO Accounts VALUES (103,'Amit','Savings',20000);

COMMIT;

CREATE OR REPLACE PROCEDURE ProcessMonthlyInterest
AS
BEGIN
    UPDATE Accounts
    SET Balance = Balance + (Balance * 0.01)
    WHERE AccountType = 'Savings';

    COMMIT;
END;
/

BEGIN
    ProcessMonthlyInterest;
    DBMS_OUTPUT.PUT_LINE('Scenario 1: Monthly interest processed.');
END;
/

BEGIN
    FOR a IN (SELECT * FROM Accounts) LOOP
        DBMS_OUTPUT.PUT_LINE(
            a.AccountID || ' ' ||
            a.CustomerName || ' ' ||
            a.AccountType || ' ' ||
            a.Balance
        );
    END LOOP;
END;
/