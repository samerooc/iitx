import { NextResponse } from 'next/server';
import { supabase, isConfiguredSupabase } from '@/lib/supabase';
import { readData, writeData } from '@/lib/db';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET() {
  try {
    if (isConfiguredSupabase()) {
      const { data, error } = await supabase
        .from('site_settings')
        .select('*')
        .eq('id', 1)
        .single();

      if (!error && data) {
        return NextResponse.json({
          siteTitle: 'IIT RUNGTA',
          subTitle: 'Student Union Portal',
          logoText: data.site_logo_icon || '🏛️',
          logoUrl: data.site_logo_url || '',
          faviconUrl: data.site_favicon_url || '',
          heroTitle: 'Voice of Democracy, Strength of Unity.',
          heroSubtext: data.about_text || '',
          tickerAlert: 'Student Union Executive Elections 2026 Schedule Active',
          contactPhone: data.contact_phone || '+91 98765 43210',
          contactEmail: data.contact_email || 'union@iitrungta.fun',
          campusAddress: data.contact_address || 'IIT Rungta Campus, Bhilai, Chhattisgarh',
          whatsappGcLink: data.whatsapp_gc_link || '',
          telegramLink: data.telegram_link || '',
          instagramLink: data.instagram_link || '',
          discordLink: data.discord_link || '',
          maintenanceMode: data.maintenance_mode || false,
          maintenanceMessage: data.maintenance_message || '',
          helpFaqs: data.help_faqs || []
        });
      }
    }
  } catch (e) {}

  const settings = readData('settings') || {};
  return NextResponse.json(settings);
}

export async function PUT(request) {
  try {
    const updated = await request.json();

    if (isConfiguredSupabase()) {
      const dbPayload = {
        id: 1,
        contact_email: updated.contactEmail,
        contact_phone: updated.contactPhone,
        contact_address: updated.campusAddress,
        site_logo_icon: updated.logoText,
        site_logo_url: updated.logoUrl,
        site_favicon_url: updated.faviconUrl,
        whatsapp_gc_link: updated.whatsappGcLink,
        telegram_link: updated.telegramLink,
        instagram_link: updated.instagramLink,
        discord_link: updated.discordLink,
        maintenance_mode: updated.maintenanceMode,
        maintenance_message: updated.maintenanceMessage,
        about_text: updated.heroSubtext,
        help_faqs: updated.helpFaqs,
        updated_at: new Date().toISOString()
      };

      const { data, error } = await supabase
        .from('site_settings')
        .upsert(dbPayload)
        .select()
        .single();

      if (!error) {
        return NextResponse.json({ success: true, settings: updated });
      }
    }

    const current = readData('settings') || {};
    const merged = { ...current, ...updated };
    writeData('settings', merged);
    return NextResponse.json({ success: true, settings: merged });
  } catch (error) {
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
