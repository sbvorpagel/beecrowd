require_relative '../beginner/1000/1000'

RSpec.describe 'hello' do
    it 'returns Hello World!' do
        expect(hello).to eq("Hello World!")
    end
end