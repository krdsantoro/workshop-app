import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Play, RefreshCw, Layers, ShieldCheck, Zap } from 'lucide-react';

export const DanyloFeaturePage: React.FC = () => {
  const navigate = useNavigate();
  const [taskCount, setTaskCount] = useState(12);
  const [isRunning, setIsRunning] = useState(false);
  const [logs, setLogs] = useState<string[]>([
    '[INIT] Agentic Control Hub initialized.',
    '[READY] Connected to Workshop App mesh.',
  ]);

  const handleRunSimulation = () => {
    setIsRunning(true);
    const newLog = `[TASK #${taskCount + 1}] Executing automated workflow cycle...`;
    setLogs((prev) => [newLog, ...prev]);
    setTaskCount((prev) => prev + 1);

    setTimeout(() => {
      setIsRunning(false);
    }, 800);
  };

  return (
    <div
      data-testid="danylo-feature-page"
      style={{
        minHeight: '100vh',
        backgroundColor: '#f8fafc',
        fontFamily: 'system-ui, -apple-system, sans-serif',
        padding: '2rem',
      }}
    >
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <button
          onClick={() => navigate('/')}
          data-testid="back-to-dashboard-btn"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            backgroundColor: '#ffffff',
            color: '#475569',
            border: '1px solid #cbd5e1',
            padding: '0.5rem 1rem',
            borderRadius: '0.375rem',
            fontSize: '0.875rem',
            fontWeight: 500,
            cursor: 'pointer',
            marginBottom: '1.5rem',
          }}
        >
          <ArrowLeft size={16} /> Back to Gallery
        </button>

        <div
          style={{
            backgroundColor: '#ffffff',
            borderRadius: '0.75rem',
            padding: '2rem',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
            border: '1px solid #e2e8f0',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
            <div>
              <h1 style={{ margin: 0, fontSize: '1.5rem', fontWeight: 700, color: '#0f172a' }}>
                Danylo's Agentic Control Hub
              </h1>
              <p style={{ margin: '0.25rem 0 0 0', color: '#64748b', fontSize: '0.875rem' }}>
                Isolated Feature Page showcasing real-time agent workflow orchestration.
              </p>
            </div>
            <span
              style={{
                backgroundColor: '#e0e7ff',
                color: '#3730a3',
                padding: '0.375rem 0.75rem',
                borderRadius: '0.375rem',
                fontSize: '0.75rem',
                fontWeight: 600,
              }}
            >
              Standalone Module
            </span>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '1rem',
              marginBottom: '1.5rem',
            }}
          >
            <div style={{ backgroundColor: '#f1f5f9', padding: '1rem', borderRadius: '0.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#475569', fontSize: '0.875rem' }}>
                <Zap size={16} /> Executed Tasks
              </div>
              <div style={{ fontSize: '1.5rem', fontWeight: 700, color: '#0f172a', marginTop: '0.25rem' }}>
                {taskCount}
              </div>
            </div>

            <div style={{ backgroundColor: '#f1f5f9', padding: '1rem', borderRadius: '0.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#475569', fontSize: '0.875rem' }}>
                <ShieldCheck size={16} /> Isolation Rating
              </div>
              <div style={{ fontSize: '1.5rem', fontWeight: 700, color: '#16a34a', marginTop: '0.25rem' }}>
                100% Secure
              </div>
            </div>

            <div style={{ backgroundColor: '#f1f5f9', padding: '1rem', borderRadius: '0.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#475569', fontSize: '0.875rem' }}>
                <Layers size={16} /> Active Pipeline
              </div>
              <div style={{ fontSize: '1.5rem', fontWeight: 700, color: '#2563eb', marginTop: '0.25rem' }}>
                Agent Mesh v2
              </div>
            </div>
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <button
              onClick={handleRunSimulation}
              disabled={isRunning}
              data-testid="run-simulation-btn"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                backgroundColor: '#2563eb',
                color: '#ffffff',
                border: 'none',
                padding: '0.625rem 1.25rem',
                borderRadius: '0.5rem',
                fontWeight: 600,
                fontSize: '0.875rem',
                cursor: isRunning ? 'not-allowed' : 'pointer',
                opacity: isRunning ? 0.7 : 1,
              }}
            >
              {isRunning ? <RefreshCw size={16} className="spin" /> : <Play size={16} />}
              {isRunning ? 'Running Simulation...' : 'Trigger Workflow Simulation'}
            </button>
          </div>

          <div>
            <h3 style={{ fontSize: '1rem', fontWeight: 600, color: '#1e293b', marginBottom: '0.5rem' }}>
              Execution Log Stream
            </h3>
            <div
              data-testid="execution-log-stream"
              style={{
                backgroundColor: '#0f172a',
                color: '#38bdf8',
                padding: '1rem',
                borderRadius: '0.5rem',
                fontFamily: 'monospace',
                fontSize: '0.85rem',
                minHeight: '120px',
                maxHeight: '200px',
                overflowY: 'auto',
              }}
            >
              {logs.map((log, index) => (
                <div key={index} style={{ marginBottom: '0.25rem' }}>
                  {log}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};