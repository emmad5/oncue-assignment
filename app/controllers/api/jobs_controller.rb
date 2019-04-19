class Api::JobsController < ApplicationController

  def create
    @job = Job.new(job_params)
    @trucks = Truck.all
    @trucks.each do |truck|
      if truck.jobs.length == 0
        @job.truck_id = truck.id
        break
      elsif truck.jobs.all? {|job| job.date != @job.date}
        @job.truck_id = truck.id
        break
      else
        truck.jobs.each do |job|
          next if job.date != @job.date
          
        end
      end
    end
    if @job.save
      render 'api/trucks/index'
    else
       render json: @job.errors.full_messages, status: 422
    end
  end

  def index
    @jobs = Job.all
  end

  private
  def job_params 
    params.require(:job).permit(:customer, :start_time, :estimated_end_time, :date)
  end
end