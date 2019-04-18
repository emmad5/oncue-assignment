class Api::JobsController < ApplicationController

  def create
    @job = Job.new(job_params)
  end

  def index
    @jobs = Job.all
  end

  private
  def job_params 
    params.require(:job).permit(:customer, :start_time, :estimated_end_time)
  end
end