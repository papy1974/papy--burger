-- Add 3 burgers to the table, two not devoured, one already devoured.

-- boolean not needed if it's true, 
--     since it's defined in the table as a default of false
INSERT INTO burgers 
    (burger_name) 
    VALUES
    ("Tomato Spinach Mushroom Burger"),
    ("Just a Burger");

-- boolean is true, so it needs to be explicitly inserted.
INSERT INTO burgers 
    (burger_name,devoured) 
    VALUES
    ("BLT Burger", TRUE);