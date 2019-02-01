class TraineesController < ApplicationController
  before_action :set_trainee, only: [:show, :edit, :update, :destroy]

  # GET /trainees
  def index
    @trainees = Trainee.all
  end

  # GET /trainees/1
  def show
  end

  # GET /trainees/new
  def new
    @trainee = Trainee.new
  end

  # GET /trainees/1/edit
  def edit
  end

  # POST /trainees
  def create
    @trainee = Trainee.new(trainee_params)

    if @trainee.save
      redirect_to @trainee, notice: 'Trainee was successfully created.'
    else
      render :new
    end
  end

  # PATCH/PUT /trainees/1
  def update
    if @trainee.update(trainee_params)
      redirect_to @trainee, notice: 'Trainee was successfully updated.'
    else
      render :edit
    end
  end

  # DELETE /trainees/1
  def destroy
    @trainee.destroy
    redirect_to trainees_url, notice: 'Trainee was successfully destroyed.'
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_trainee
      @trainee = Trainee.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def trainee_params
      params.require(:trainee).permit(:first_name, :last_name, :user_id)
    end
end
