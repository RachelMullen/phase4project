class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password_digest, :name, :email, :bio, :image_url
  has_many :comments
end
