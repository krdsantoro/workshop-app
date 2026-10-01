import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Bot, Cpu, ArrowRight, CheckCircle2, AlertCircle } from 'lucide-react';

export interface DanyloWidgetProps {
  simulateError?: boolean;
}

export const DanyloWidget: React.FC<DanyloWidgetProps> = ({ simulateError = false }) => {
  const navigate = useNavigate();
  const [activeTasks] = useState(4);
  const [systemHealth] = useState('Optimal');

  if (simulateError) {
    throw new Error('Simulated stream connection failure');
  }

  const handleOpenFeature = () => {
    navigate('/danylo-feature');
  };

  return (
    <div
      data-testid="danylo-widget"
      style={{
        backgroundColor: '#ffffff',
        borderRadius: '0.75rem',
        padding: '1.25rem',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        border: '1px solid #e5e7eb',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        fontFamily: 'system-ui, -apple-system, sans-serif',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
          <div
            style={{
              backgroundColor: '#eff6ff',
              color: '#2563eb',
              padding: '0.5rem',
              borderRadius: '0.5rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Bot size={20} />
          </div>
          <div>
            <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: 600, color: '#111827' }}>
              Danylo's Agentic Hub
            </h3>
            <span style={{ fontSize: '0.75rem', color: '#6b7280' }}>Attendee Module</span>
          </div>
        </div>

        <span
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.25rem',
            padding: '0.25rem 0.625rem',
            borderRadius: '9999px',
            fontSize: '0.75rem',
            fontWeight: 500,
            backgroundColor: '#dcfce7',
            color: '#166534',
          }}
        >
          <CheckCircle2 size={12} /> Live
        </span>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
        <div
          style={{
            backgroundColor: '#f9fafb',
            padding: '0.75rem',
            borderRadius: '0.5rem',
            border: '1px solid #f3f4f6',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.375rem', color: '#4b5563', fontSize: '0.75rem' }}>
            <Cpu size={14} /> Active Agents
          </div>
          <div style={{ fontSize: '1.25rem', fontWeight: 700, color: '#1f2937', marginTop: '0.25rem' }}>
            {activeTasks} Running
          </div>
        </div>

        <div
          style={{
            backgroundColor: '#f9fafb',
            padding: '0.75rem',
            borderRadius: '0.5rem',
            border: '1px solid #f3f4f6',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.375rem', color: '#4b5563', fontSize: '0.75rem' }}>
            <AlertCircle size={14} /> Health Status
          </div>
          <div style={{ fontSize: '1.25rem', fontWeight: 700, color: '#059669', marginTop: '0.25rem' }}>
            {systemHealth}
          </div>
        </div>
      </div>

      <button
        onClick={handleOpenFeature}
        data-testid="danylo-widget-action-btn"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '0.5rem',
          backgroundColor: '#2563eb',
          color: '#ffffff',
          border: 'none',
          padding: '0.625rem 1rem',
          borderRadius: '0.5rem',
          fontWeight: 500,
          fontSize: '0.875rem',
          cursor: 'pointer',
          transition: 'background-color 0.2s ease',
        }}
      >
        Launch Control Hub <ArrowRight size={16} />
      </button>
    </div>
  );
};