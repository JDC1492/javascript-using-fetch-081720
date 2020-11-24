class ChangeColumnInBlogPost < ActiveRecord::Migration[6.0]
  def change
    change_column :blog_posts, :likes, :integer
  end
end
