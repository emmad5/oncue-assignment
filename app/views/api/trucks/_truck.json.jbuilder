json.extract! truck, :id, :name, :start_time, :end_time

  json.jobs(truck.jobs) do |job|
    json.id job.id
    json.truckId job.truck_id
    json.customer job.customer
    json.date job.date
    json.start_time job.start_time
    json.estimated_end_time job.estimated_end_time
  end