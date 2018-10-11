CREATE TABLE product (
    id SERIAL PRIMARY KEY,
    product_name VARCHAR(200),
    product_description VARCHAR(500),
    product_price FLOAT,
    product_image_url TEXT
)