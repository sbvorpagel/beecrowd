require_relative '../beginner/1001/1001'

RSpec.describe 'resolve_problem' do
    it 'returns the string X=sum with the sum of the two numbers' do
        expect(build_solution(10, 9)).to eq("X = 19")
        expect(build_solution(-10, 4)).to eq("X = -6")
        expect(build_solution(15, -7)).to eq("X = 8")
    end
end
