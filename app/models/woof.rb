class Woof < ApplicationRecord
    has_many :likes
    has_many :comments
    has_many :users, through: :likes
    has_many :users, through: :comments

    validates :woof_content, presence: true
end
