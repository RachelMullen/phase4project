require 'faker'
###
puts "Seeding users..."
user1 = User.create!(username: "user1", password_digest: "password1", name: Faker::Creature::Dog.name, breed: Faker::Creature::Dog.breed, email: Faker::Internet.email, bio: Faker::Quote.yoda, image_url: Faker::Avatar.image)
user2 = User.create!(username: "user2", password_digest: "password2", name: Faker::Creature::Dog.name, breed: Faker::Creature::Dog.breed, email: Faker::Internet.email, bio: Faker::Quote.yoda, image_url: Faker::Avatar.image)
user3 = User.create!(username: "user3", password_digest: "password3", name: Faker::Creature::Dog.name, breed: Faker::Creature::Dog.breed, email: Faker::Internet.email, bio: Faker::Quote.yoda, image_url: Faker::Avatar.image)
user4 = User.create!(username: "user4", password_digest: "password4", name: Faker::Creature::Dog.name, breed: Faker::Creature::Dog.breed, email: Faker::Internet.email, bio: Faker::Quote.yoda, image_url: Faker::Avatar.image)
user5 = User.create!(username: "user5", password_digest: "password5", name: Faker::Creature::Dog.name, breed: Faker::Creature::Dog.breed, email: Faker::Internet.email, bio: Faker::Quote.yoda, image_url: Faker::Avatar.image)
end

###
puts "Seeding woofs..."
woof1 = Woof.create!(image_url: Faker::Avatar.image, woof_content: Faker::Quote.famous_last_words, user_id = user1.id)
woof2 = Woof.create!(image_url: Faker::Avatar.image, woof_content: Faker::Quote.famous_last_words, user_id = user2.id)
woof3 = Woof.create!(image_url: Faker::Avatar.image, woof_content: Faker::Quote.famous_last_words, user_id = user3.id)
woof4 = Woof.create!(image_url: Faker::Avatar.image, woof_content: Faker::Quote.famous_last_words, user_id = user4.id)
woof5 = Woof.create!(image_url: Faker::Avatar.image, woof_content: Faker::Quote.famous_last_words, user_id = user5.id)
woof6 = Woof.create!(image_url: Faker::Avatar.image, woof_content: Faker::Quote.famous_last_words, user_id = user1.id)

###
puts "Adding likes to woofs..."
like1 = Like.create!(user_id: user2.id, woof_id: woof2.id)
like2 = Like.create!(user_id: user1.id, woof_id: woof3.id) 
like3 = Like.create!(user_id: user3.id, woof_id: woof1.id)
like4 = Like.create!(user_id: user2.id, woof_id: woof3.id)
like5 = Like.create!(user_id: user4.id, woof_id: woof1.id)
like6 = Like.create!(user_id: user1.id, woof_id: woof5.id)
like7 = Like.create!(user_id: user5.id, woof_id: woof4.id)
end

###
puts "Adding comments to woofs..."
comment1 = Comment.create!(user_id: user2.id, woof_id: woof2.id, comment: Faker::Lorem.sentence(word_count: 3))
comment2 = Comment.create!(user_id: user1.id, woof_id: woof3.id, comment: Faker::Lorem.sentence(word_count: 3)) 
comment3 = Comment.create!(user_id: user3.id, woof_id: woof1.id, comment: Faker::Lorem.sentence(word_count: 3))
comment4 = Comment.create!(user_id: user2.id, woof_id: woof3.id, comment: Faker::Lorem.sentence(word_count: 3))
comment5 = Comment.create!(user_id: user4.id, woof_id: woof1.id, comment: Faker::Lorem.sentence(word_count: 3))
comment6 = Comment.create!(user_id: user1.id, woof_id: woof5.id, comment: Faker::Lorem.sentence(word_count: 3))
comment7 = Comment.create!(user_id: user5.id, woof_id: woof4.id, comment: Faker::Lorem.sentence(word_count: 3))
end

puts "Done seeding!"
end