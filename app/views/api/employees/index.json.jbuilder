json.array! @employees.each do |employee|
  json.first_name employee.first_name
  json.last_name employee.last_name
  json.job_title employee.job_title
end