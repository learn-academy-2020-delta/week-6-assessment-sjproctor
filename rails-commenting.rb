# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# 1) defining the current ruby controller class and inheriting methods from the parent controller
class BlogPostsController < ApplicationController
  def index
    # 2) store all instances in the post instance variable
    @posts = BlogPost.all
  end

  def show
    # 3) creating an instance variable that holds an active record query that gets a particular item from the params
    @post = BlogPost.find(params[:id])
  end

  # 4) defines the new route that returns a form that allows you to create a new post
  def new
    @post = Post.new
  end

  def create
    # 5) instance variable that creates a new blog post and takes the params method as an argument
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to new_blog_post_path
    end
  end

  def edit
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # 6) updates the instance variable passed the params method as an argument
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to edit_blog_post_path
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      redirect_to blog_posts_path
    else
      # 7) if the post is not deleted, redirect to the show page
      redirect_to blog_post_path(@post)
    end
  end

  # 8) preventing anything below this line from being called outside of the scope of the class
  private
  def blog_post_params
    # 9) makes sure that blog post is present and gives access to the columns title and content
    params.require(:blog_post).permit(:title, :content)
  end

end


# FILE: app/models/blog_post.rb

class BlogPost < ApplicationRecord
  # 10) describes the relationship between the models, connecting a parent class blog post to a child class of comments
  has_many :comments
end
