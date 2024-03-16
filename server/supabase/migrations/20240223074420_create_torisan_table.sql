CREATE TABLE torisan (
    id serial PRIMARY KEY,
    user_id uuid REFERENCES auth.users NOT NULL,
    name character varying(50) NOT NULL,
    nickname character varying(50) NOT NULL,
    birth_date date NOT NULL,
    specie_type int NOT NULL,
    stage_type int NOT NULL,
    gender_type int NOT NULL,
    created_at timestamp with time zone NOT NULL DEFAULT now(),
    updated_at timestamp with time zone NOT NULL DEFAULT now()
);

CREATE INDEX torisan_user_id_idx
ON torisan
USING btree (user_id);

ALTER TABLE torisan ENABLE ROW LEVEL SECURITY;
ALTER TABLE torisan FORCE ROW LEVEL SECURITY;

CREATE POLICY user_isolation_policy ON torisan USING  ((user_id = (current_setting('app.user_id'::text))::uuid));

CREATE TABLE torisan_objective (
    id serial PRIMARY KEY,
    user_id uuid REFERENCES auth.users NOT NULL,
    torisan_id int REFERENCES torisan(id) ON DELETE CASCADE NOT NULL,
    body_weight real default NULL,
    amount_of_water real default NULL,
    amount_of_staple_food real default NULL,
    created_at timestamp with time zone NOT NULL DEFAULT now(),
    updated_at timestamp with time zone NOT NULL DEFAULT now()
);

CREATE INDEX torisan_objective_user_id_idx
ON torisan_objective
USING btree (user_id);

CREATE INDEX torisan_objective_torisan_id_idx
ON torisan_objective
USING btree (torisan_id);

ALTER TABLE torisan_objective ENABLE ROW LEVEL SECURITY;
ALTER TABLE torisan_objective FORCE ROW LEVEL SECURITY;

CREATE POLICY user_isolation_policy ON torisan_objective USING  ((user_id = (current_setting('app.user_id'::text))::uuid));

CREATE TABLE torisan_staple_food (
    id serial PRIMARY KEY,
    user_id uuid REFERENCES auth.users NOT NULL,
    torisan_id int REFERENCES torisan(id) ON DELETE CASCADE NOT NULL,
    staple_food_type int NOT NULL,
    any_staple_food character varying(100) DEFAULT NULL,
    any_other_foods character varying(100) DEFAULT NULL,
    created_at timestamp with time zone NOT NULL DEFAULT now(),
    updated_at timestamp with time zone NOT NULL DEFAULT now()
);

CREATE INDEX torisan_staple_food_user_id_idx
ON torisan_staple_food
USING btree (user_id);

CREATE INDEX torisan_staple_food_torisan_id_idx
ON torisan_staple_food
USING btree (torisan_id);

ALTER TABLE torisan_staple_food ENABLE ROW LEVEL SECURITY;
ALTER TABLE torisan_staple_food FORCE ROW LEVEL SECURITY;

CREATE POLICY user_isolation_policy ON torisan_staple_food USING  ((user_id = (current_setting('app.user_id'::text))::uuid));

CREATE TABLE torisan_staple_food_other_food_type (
    id serial PRIMARY KEY,
    user_id uuid REFERENCES auth.users NOT NULL,
    torisan_staple_food_id int REFERENCES torisan_staple_food(id) ON DELETE CASCADE NOT NULL,
    other_food_type int NOT NULL,
    created_at timestamp with time zone NOT NULL DEFAULT now(),
    updated_at timestamp with time zone NOT NULL DEFAULT now()
);

CREATE INDEX torisan_staple_food_other_food_type_user_id_idx
ON torisan_staple_food_other_food_type
USING btree (user_id);

CREATE INDEX torisan_staple_food_other_food_type_torisan_staple_food_id_idx
ON torisan_staple_food_other_food_type
USING btree (torisan_staple_food_id);

ALTER TABLE torisan_staple_food_other_food_type ENABLE ROW LEVEL SECURITY;
ALTER TABLE torisan_staple_food_other_food_type FORCE ROW LEVEL SECURITY;

CREATE POLICY user_isolation_policy ON torisan_staple_food_other_food_type USING  ((user_id = (current_setting('app.user_id'::text))::uuid));
