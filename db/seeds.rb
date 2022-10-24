require 'faker'

puts "Seeding users..."
User.create!([{
    username: 
    password_digest:
    email: Faker::Internet.email, 
    name: Faker::Creature::Dog.name,
    image_url: 
    bio: Faker::Quote.yoda
}])

puts "Seeding woofs..."
(1..10).each do |id|
Comment.create!([
    id: id,
    user_id: rand(1..20),
    comment: Faker::Lorem.sentence(word_count: 3),
    user_name: User.find(rand(1..20)).name,
    ticket_id: rand(1..10),
    user_role: %w[customer admin agent].sample
])

puts "Adding likes to woofs..."
Woof.all.each do |woof|
  rand(1..5).times do
    like = Like.find(Like.pluck(:id).sample)

    Like.create!(woof_id: woof.id, like_id: like.id, price: rand(5..25))
  end

  puts "Adding comments to woofs..."
Woof.all.each do |woof|
    rand(1..5).times do
      comment = Comment.find(Comment.pluck(:id).sample)
  
      Comment.create!(woof_id: woof.id, comment_id: comment.id, price: rand(5..25))
    end
end

puts "🍕 Done seeding!"