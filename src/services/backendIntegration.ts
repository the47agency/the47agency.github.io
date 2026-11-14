/**
 * 47 Agency — Frontend Inquiry & Form Handling Service Layer
 *
 * Operates completely client-side as a frontend-only module with validation,
 * reference receipt generation, and localStorage persistence. Structured cleanly
 * with typed contracts so external integrations can be wired later if needed.
 */

export interface ContactSubmissionPayload {
  fullName: string;
  corporateEmail: string;
  phone?: string;
  companyName: string;
  region: 'KSA' | 'UAE' | 'Qatar' | 'Kuwait' | 'Turkey' | 'International';
  serviceInterests: ('Marketing' | 'Software' | 'AI')[];
  estimatedBudget: string;
  projectTimeline: string;
  projectBrief: string;
  referralSource?: string;
}

export interface SubmissionResult {
  success: boolean;
  referenceId?: string;
  message: string;
  timestamp: string;
}

/**
 * Validates and records project inquiries purely on the client side.
 */
export async function submitProjectInquiry(
  payload: ContactSubmissionPayload
): Promise<SubmissionResult> {
  // Validate required fields
  if (!payload.fullName || !payload.corporateEmail || !payload.companyName || !payload.projectBrief) {
    throw new Error('Please fill in all mandatory corporate contact fields');
  }

  // Basic email pattern check
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(payload.corporateEmail)) {
    throw new Error('Please provide a valid corporate email address');
  }

  // Frontend receipt generation (simulates asynchronous confirmation)
  await new Promise((resolve) => setTimeout(resolve, 650));

  const generatedRef = `47-REF-${Math.floor(100000 + Math.random() * 900000)}`;

  // Persist inquiry receipt locally in browser storage
  try {
    const existing = JSON.parse(localStorage.getItem('47_agency_inquiries') || '[]');
    existing.unshift({ ...payload, referenceId: generatedRef, createdAt: new Date().toISOString() });
    localStorage.setItem('47_agency_inquiries', JSON.stringify(existing.slice(0, 10)));
  } catch {
    // Graceful fallback when browser storage is restricted
  }

  return {
    success: true,
    referenceId: generatedRef,
    message: 'Your project brief has been received and logged with a confirmation reference ID',
    timestamp: new Date().toISOString(),
  };
}

/**
 * Helper reporting client-side form handling status
 */
export function getBackendStatus(): { isConfigured: boolean; provider: string } {
  return {
    isConfigured: true,
    provider: 'Frontend Client Storage',
  };
}
