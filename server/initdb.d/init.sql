CREATE DATABASE ito;
\c ito;

CREATE SEQUENCE torisans_id_seq AS integer;

CREATE TABLE torisans (
    id bigint NOT NULL DEFAULT nextval('torisans_id_seq'::regclass),
    name character varying(50) NOT NULL,
    nickname character varying(50) NOT NULL,
    birth_date date NOT NULL,
    created_at timestamp with time zone NOT NULL DEFAULT now(),
    updated_at timestamp with time zone NOT NULL DEFAULT now()
)