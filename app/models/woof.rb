class Woof < ApplicationRecord
    has_many :comments
    has_many :users, through: :comments

    validates :woof_content, presence: true
end
