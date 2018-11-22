create table tasks(
id serial primary key,
title text,
description text,
completed boolean default false
);