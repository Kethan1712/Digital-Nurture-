SET SERVEROUTPUT ON;

CREATE TABLE Employees (
    EmployeeID NUMBER PRIMARY KEY,
    EmployeeName VARCHAR2(50),
    Department VARCHAR2(30),
    Salary NUMBER
);

INSERT INTO Employees VALUES (1,'Arun','IT',50000);
INSERT INTO Employees VALUES (2,'Kiran','HR',40000);
INSERT INTO Employees VALUES (3,'Sneha','IT',60000);

COMMIT;

CREATE OR REPLACE PROCEDURE UpdateEmployeeBonus(
    p_department VARCHAR2,
    p_bonus NUMBER
)
AS
BEGIN
    UPDATE Employees
    SET Salary = Salary + (Salary * p_bonus / 100)
    WHERE Department = p_department;

    COMMIT;
END;
/

BEGIN
    UpdateEmployeeBonus('IT',10);
    DBMS_OUTPUT.PUT_LINE('Scenario 2: Employee bonus updated.');
END;
/

BEGIN
    FOR e IN (SELECT * FROM Employees) LOOP
        DBMS_OUTPUT.PUT_LINE(
            e.EmployeeID || ' ' ||
            e.EmployeeName || ' ' ||
            e.Department || ' ' ||
            e.Salary
        );
    END LOOP;
END;
/