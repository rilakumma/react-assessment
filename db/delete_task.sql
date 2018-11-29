delete from tasks
where id = ${id}
returning *;