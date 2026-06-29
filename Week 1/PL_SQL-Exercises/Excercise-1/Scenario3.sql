SET SERVEROUTPUT ON;

DECLARE
    v_name Customers.Name%TYPE;
BEGIN
    FOR l IN (
        SELECT c.Name, lo.DueDate
        FROM Customers c
        JOIN Loans lo
        ON c.CustomerID = lo.CustomerID
        WHERE lo.DueDate BETWEEN SYSDATE AND SYSDATE + 30
    ) LOOP

        DBMS_OUTPUT.PUT_LINE(
            'Reminder: Dear ' || l.Name ||
            ', your loan is due on ' ||
            TO_CHAR(l.DueDate,'DD-MON-YYYY')
        );

    END LOOP;
END;
/