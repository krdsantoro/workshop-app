import { DanyloWidget } from '../components/widgets/danylo-widget/DanyloWidget';
import { ErrorBoundary } from '../components/ErrorBoundary';

export const DashboardPage: React.FC = () => {
  return (
    <div
      data-testid="dashboard-page"
      style={{
        minHeight: '100vh',
        backgroundColor: '#f1f5f9',
        padding: '2rem',
        fontFamily: 'system-ui, -apple-system, sans-serif',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <header style={{ marginBottom: '2rem' }}>
          <h1 style={{ margin: 0, fontSize: '1.875rem', fontWeight: 800, color: '#0f172a' }}>
            Workshop App — Attendee Dashboard Gallery
          </h1>
          <p style={{ margin: '0.5rem 0 0 0', color: '#64748b', fontSize: '1rem' }}>
            Interactive showcase of attendee features and custom agent widgets.
          </p>
        </header>

        <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.5rem' }}>
          {/* Danylo's Widget in ErrorBoundary */}
          <ErrorBoundary>
            <DanyloWidget />
          </ErrorBoundary>

          {/* Placeholder for other attendee widgets */}
          <div
            style={{
              backgroundColor: '#ffffff',
              borderRadius: '0.75rem',
              padding: '1.25rem',
              border: '2px dashed #cbd5e1',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              color: '#94a3b8',
              minHeight: '180px',
            }}
          >
            <p style={{ margin: 0, fontWeight: 500 }}>Attendee Module Placeholder</p>
            <span style={{ fontSize: '0.75rem', marginTop: '0.25rem' }}>Ready for integration</span>
          </div>
        </section>
      </div>
    </div>
  );
};