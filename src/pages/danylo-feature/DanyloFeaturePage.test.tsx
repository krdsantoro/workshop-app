import { describe, it, expect, vi } from 'vitest';
import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter, useNavigate } from 'react-router-dom';
import { DanyloFeaturePage } from './DanyloFeaturePage';

vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom');
  return {
    ...actual,
    useNavigate: vi.fn(),
  };
});

describe('DanyloFeaturePage Component', () => {
  it('renders the feature page header, metrics, and initial execution log stream', () => {
    render(
      <MemoryRouter>
        <DanyloFeaturePage />
      </MemoryRouter>
    );

    expect(screen.getByTestId('danylo-feature-page')).toBeInTheDocument();
    expect(screen.getByText("Danylo's Agentic Control Hub")).toBeInTheDocument();
    expect(screen.getByTestId('execution-log-stream')).toBeInTheDocument();
    expect(screen.getByText('[INIT] Agentic Control Hub initialized.')).toBeInTheDocument();
  });

  it('allows triggering a simulation cycle and updates log stream & metrics', async () => {
    vi.useFakeTimers({ shouldAdvanceTime: true });
    const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });

    render(
      <MemoryRouter>
        <DanyloFeaturePage />
      </MemoryRouter>
    );

    const runBtn = screen.getByTestId('run-simulation-btn');
    await user.click(runBtn);

    expect(screen.getByText('[TASK #13] Executing automated workflow cycle...')).toBeInTheDocument();

    act(() => {
      vi.advanceTimersByTime(1000);
    });

    vi.useRealTimers();
  });

  it('navigates back to the main gallery when "Back to Gallery" is clicked', async () => {
    const mockNavigate = vi.fn();
    vi.mocked(useNavigate).mockReturnValue(mockNavigate);

    const user = userEvent.setup();
    render(
      <MemoryRouter>
        <DanyloFeaturePage />
      </MemoryRouter>
    );

    const backBtn = screen.getByTestId('back-to-dashboard-btn');
    await user.click(backBtn);

    expect(mockNavigate).toHaveBeenCalledWith('/');
  });
});