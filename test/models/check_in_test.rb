# == Schema Information
#
# Table name: check_ins
#
#  id         :bigint           not null, primary key
#  author_id  :integer          not null
#  beer_id    :integer          not null
#  body       :text             not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
require 'test_helper'

class CheckinTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
