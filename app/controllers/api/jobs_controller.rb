class Api::JobsController < ApplicationController

  def create
    @job = Job.new(job_params)
    @trucks = Truck.all
    @trucks.each do |truck|
      if truck.jobs.length == 0
        @job.truck_id = truck.id
        break
        
      end
    end
    debugger
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