class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password_digest, :name, :email, :bio, :image_url
end
