class User < ApplicationRecord
    has_many :comments
    has_many :woofs, through: :comments

    validates :username, presence: true
    # validates :username, uniqueness: true
    validates :email, uniqueness: true
    validates :email, presence: true
    validates :name, presence: true
    validates :password_digest, presence: true
    # validates :password_digest, uniqueness: true
end
