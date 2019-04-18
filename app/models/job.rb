# == Schema Information
#
# Table name: jobs
#
#  id                 :integer          not null, primary key
#  customer           :string           not null
#  date               :date             not null
#  start_time         :time             not null
#  estimated_end_time :time             not null
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#

class Job < ApplicationRecord
  validates :customer, :start_time, :estimated_end_time, presence: true
end
