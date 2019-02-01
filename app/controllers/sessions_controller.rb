class SessionsController < ApplicationController
  before_action :set_lesson, only: [:show]
  
  def index
    @session = Session.paginate(:page => params[:page], :per_page => 6).order('sort ASC')
  end

  def show
    @others = Lesson.paginate(:page => params[:page], :per_page => 4).order('sort ASC')
  end

  def new
    @session = Session.new
  end

  def edit
  end

  def create
    @session = Session.new(session_params)

    if @session.save
      redirect_to @session, notice: 'Session was successfully created.'
    else
      render :new
    end
  end

  def update
    if @session.update(session_params)
      redirect_to @session, notice: 'Session was successfully updated.'
    else
      render :edit
    end
  end

  def destroy
    @session.destroy
    redirect_to sessions_url, notice: 'Session was successfully destroyed.'
  end

  private
    def set_session
      @session = Session.find(params[:id])
    end

    def session_params
      params.fetch(:session, {})
    end
end
