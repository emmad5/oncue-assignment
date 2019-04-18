# == Schema Information
#
# Table name: jobs
#
#  id                 :bigint(8)        not null, primary key
#  customer           :string           not null
#  date               :date             not null
#  start_time         :time             not null
#  estimated_end_time :time             not null
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#  truck_id           :integer
#

require 'test_helper'

class JobTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
