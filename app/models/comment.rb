# == Schema Information
#
# Table name: comments
#
#  id         :bigint           not null, primary key
#  author_id  :integer          not null
#  body       :text             not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  checkin_id :integer          not null
#
class Comment < ApplicationRecord
    validates :body, :author_id, :checkin_id, presence: true 

    belongs_to :checkin
    belongs_to :author,
    foreign_key: :author_id,
    class_name: :User 
end
