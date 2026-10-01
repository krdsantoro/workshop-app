import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter, useNavigate } from 'react-router-dom';
import { DanyloWidget } from './DanyloWidget';
import { ErrorBoundary } from '../../ErrorBoundary';

vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom');
  return {
    ...actual,
    useNavigate: vi.fn(),
  };
});

describe('DanyloWidget Component (AC1, AC2, AC3)', () => {
  it('AC1: renders Danylo widget with title, live status, and metrics cleanly', () => {
    render(
      <MemoryRouter>
        <DanyloWidget />
      </MemoryRouter>
    );

    expect(screen.getByTestId('danylo-widget')).toBeInTheDocument();
    expect(screen.getByText("Danylo's Agentic Hub")).toBeInTheDocument();
    expect(screen.getByText('Live')).toBeInTheDocument();
    expect(screen.getByText('4 Running')).toBeInTheDocument();
    expect(screen.getByText('Optimal')).toBeInTheDocument();
  });

  it('AC2: triggers navigation to /danylo-feature when action button is clicked', async () => {
    const mockNavigate = vi.fn();
    vi.mocked(useNavigate).mockReturnValue(mockNavigate);

    const user = userEvent.setup();
    render(
      <MemoryRouter>
        <DanyloWidget />
      </MemoryRouter>
    );

    const actionBtn = screen.getByTestId('danylo-widget-action-btn');
    await user.click(actionBtn);

    expect(mockNavigate).toHaveBeenCalledWith('/danylo-feature');
  });

  it('AC3: renders graceful fallback UI via ErrorBoundary when data stream fails', () => {
    // Suppress console.error during expected thrown error
    const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {});

    render(
      <ErrorBoundary>
        <DanyloWidget simulateError={true} />
      </ErrorBoundary>
    );

    expect(screen.getByTestId('error-boundary-fallback')).toBeInTheDocument();
    expect(screen.getByText('Widget Offline / Graceful Fallback')).toBeInTheDocument();
    expect(
      screen.getByText('Simulated stream connection failure')
    ).toBeInTheDocument();

    consoleSpy.mockRestore();
  });
});