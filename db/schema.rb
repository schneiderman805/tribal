# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_01_31_090257) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "price_tables", force: :cascade do |t|
    t.integer "trainees"
    t.integer "price_point"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "sessions", force: :cascade do |t|
    t.string "title"
    t.datetime "start_date"
    t.datetime "end_date"
    t.integer "status", default: 0
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "price_table_id"
    t.bigint "{:foreign_key=>true}_id"
    t.bigint "price_tables_id"
    t.index ["price_tables_id"], name: "index_sessions_on_price_tables_id"
    t.index ["{:foreign_key=>true}_id"], name: "index_sessions_on_{:foreign_key=>true}_id"
  end

  add_foreign_key "sessions", "price_tables", column: "price_tables_id"
end
