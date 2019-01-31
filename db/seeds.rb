pricetable = PriceTable.new(trainees: 4, price_point: 0)

5.times do 
    Session.create(title: 'Crossfit', start_date: '2019-02-01 15:00:00', end_date: '2019-02-01 15:30:00', status: 0, price_table_id: 1)
end

5.times do 
    Session.create(title: 'Body Pump', start_date: '2019-02-01 15:00:00', end_date: '2019-02-01 15:30:00', status: 1, price_table_id: 1)
end

5.times do 
    Session.create(title: 'Yoga', start_date: '2019-02-01 15:00:00', end_date: '2019-02-01 15:30:00', status: 2, price_table_id: 1)
end