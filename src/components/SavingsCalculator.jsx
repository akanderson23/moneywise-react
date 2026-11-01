import { useState } from 'react'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import SliderField from './SliderField'
import CalcResult from './CalcResult'
import './SavingsCalculator.css'

// recharts draws in svg, so it needs real colors instead of css variables
const NAVY = '#0B2240'
const GOLD = '#C5A85C'
const BORDER = '#EAE6DF'
const MUTED = '#8A94A6'

const money = (amount) =>
  amount.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 })

const shortMoney = (amount) =>
  amount >= 1000000 ? `$${(amount / 1000000).toFixed(1)}M` : amount >= 1000 ? `$${Math.round(amount / 1000)}k` : `$${amount}`

// add the deposit every month and grow the balance by the monthly rate
const buildGrowth = (monthly, rate, years) => {
  const data = [{ year: 0, deposits: 0, interest: 0 }]
  let balance = 0

  for (let month = 1; month <= years * 12; month++) {
    balance = balance * (1 + rate / 100 / 12) + monthly

    if (month % 12 === 0) {
      const deposits = monthly * month
      data.push({ year: month / 12, deposits, interest: Math.round(balance - deposits) })
    }
  }

  return data
}

function SavingsCalculator() {
  const [monthly, setMonthly] = useState(200)
  const [rate, setRate] = useState(7)
  const [years, setYears] = useState(25)

  const data = buildGrowth(monthly, rate, years)
  const final = data[data.length - 1]

  const sliders = [
    { label: 'Monthly Deposit', id: 'calc-monthly', value: monthly, display: money(monthly), min: 25, max: 2000, step: 25, onChange: setMonthly },
    { label: 'Yearly Return', id: 'calc-rate', value: rate, display: `${rate}%`, min: 1, max: 12, step: 0.5, onChange: setRate },
    { label: 'Years Invested', id: 'calc-years', value: years, display: `${years} years`, min: 1, max: 40, step: 1, onChange: setYears },
  ]

  const results = [
    { label: 'Total Value', value: final.deposits + final.interest, highlight: true },
    { label: 'Your Deposits', value: final.deposits },
    { label: 'Interest Earned', value: final.interest },
  ]

  return (
    <div className="savings-calculator card">
      <div className="savings-calculator-inputs">
        {sliders.map((slider) => (
          <SliderField key={slider.id} {...slider} />
        ))}

        <ul className="savings-calculator-results">
          {results.map((result) => (
            <CalcResult key={result.label} label={result.label} value={money(result.value)} highlight={result.highlight} />
          ))}
        </ul>
      </div>

      <div className="savings-calculator-chart">
        <ResponsiveContainer width="100%" height={360}>
          <AreaChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
            <CartesianGrid stroke={BORDER} vertical={false} />
            <XAxis dataKey="year" tick={{ fill: MUTED, fontSize: 12 }} tickLine={false} axisLine={{ stroke: BORDER }} tickFormatter={(year) => `Yr ${year}`} minTickGap={16} />
            <YAxis tick={{ fill: MUTED, fontSize: 12 }} tickLine={false} axisLine={false} tickFormatter={shortMoney} width={56} />
            <Tooltip formatter={(value) => money(value)} labelFormatter={(year) => `Year ${year}`} contentStyle={{ borderRadius: 8, borderColor: BORDER }} />
            <Legend iconType="circle" wrapperStyle={{ fontSize: 14, paddingTop: 12 }} />
            <Area type="monotone" dataKey="deposits" name="Your Deposits" stackId="1" stroke={NAVY} fill={NAVY} fillOpacity={0.85} />
            <Area type="monotone" dataKey="interest" name="Interest Earned" stackId="1" stroke={GOLD} fill={GOLD} fillOpacity={0.85} />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default SavingsCalculator
