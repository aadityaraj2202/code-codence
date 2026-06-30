import React from 'react'
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'

const COLORS = ['#10B981', '#4F46E5', '#F59E0B', '#EF4444']

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white rounded-xl shadow-dropdown border border-gray-100 p-3">
        <div className="flex items-center gap-2 text-sm">
          <span className="w-2 h-2 rounded-full" style={{ backgroundColor: payload[0].payload.fill }} />
          <span className="text-text-secondary">{payload[0].name}:</span>
          <span className="font-semibold text-text-primary">{payload[0].value}</span>
        </div>
      </div>
    )
  }
  return null
}

const CustomLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
  if (percent < 0.05) return null
  const RADIAN = Math.PI / 180
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5
  const x = cx + radius * Math.cos(-midAngle * RADIAN)
  const y = cy + radius * Math.sin(-midAngle * RADIAN)

  return (
    <text x={x} y={y} fill="white" textAnchor="middle" dominantBaseline="central" fontSize={12} fontWeight={600}>
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  )
}

function CompletionPieChart({ data = [] }) {
  const defaultData = data.length > 0 ? data : [
    { name: 'Completed', value: 42 },
    { name: 'In Progress', value: 28 },
    { name: 'Not Started', value: 18 },
    { name: 'Dropped', value: 12 },
  ]

  return (
    <ResponsiveContainer width="100%" height={280}>
      <PieChart>
        <Pie
          data={defaultData}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={CustomLabel}
          outerRadius={100}
          innerRadius={50}
          dataKey="value"
          paddingAngle={3}
        >
          {defaultData.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={COLORS[index % COLORS.length]}
              stroke="none"
            />
          ))}
        </Pie>
        <Tooltip content={<CustomTooltip />} />
        <Legend
          wrapperStyle={{ fontSize: '12px' }}
          iconType="circle"
          iconSize={8}
        />
      </PieChart>
    </ResponsiveContainer>
  )
}

export default CompletionPieChart
