SET SERVEROUTPUT ON;

CREATE TABLE Customers (
    CustomerID NUMBER PRIMARY KEY,
    Name VARCHAR2(50),
    Age NUMBER,
    Balance NUMBER,
    IsVIP VARCHAR2(5)
);

CREATE TABLE Loans (
    LoanID NUMBER PRIMARY KEY,
    CustomerID NUMBER,
    InterestRate NUMBER,
    DueDate DATE
);

INSERT INTO Customers VALUES (101,'Rahul',65,15000,'FALSE');
INSERT INTO Customers VALUES (102,'Priya',45,8000,'FALSE');
INSERT INTO Customers VALUES (103,'Amit',70,20000,'FALSE');

INSERT INTO Loans VALUES (1,101,8.5,SYSDATE+20);
INSERT INTO Loans VALUES (2,102,9.0,SYSDATE+50);
INSERT INTO Loans VALUES (3,103,7.5,SYSDATE+15);

COMMIT;

BEGIN
    FOR c IN (SELECT CustomerID, Age FROM Customers) LOOP

        IF c.Age > 60 THEN
            UPDATE Loans
            SET InterestRate = InterestRate - 1
            WHERE CustomerID = c.CustomerID;
        END IF;

    END LOOP;

    COMMIT;

    DBMS_OUTPUT.PUT_LINE('Scenario 1: Loan interest updated successfully.');
END;
/

SELECT * FROM Loans;