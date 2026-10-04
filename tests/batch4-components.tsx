// Development-only fixture: real shared components on the existing light/dark surfaces.
// It is never imported into the application and does not read or write user data.
import {createRoot} from 'react-dom/client';
import {Button} from '../components/ui/button';
import {Checkbox} from '../components/ui/checkbox';
import {Dialog,DialogTrigger,DialogContent,DialogTitle,DialogDescription} from '../components/ui/dialog';

const variants=['default','destructive','outline','secondary','ghost','link'] as const;
createRoot(document.getElementById('root')!).render(<main className="workspace">
  <h1>Batch 4 color contracts</h1>
  {['light','dark'].map(context=><section key={context} data-context={context} className={context==='dark'?'session-strip':'panel'}>
    <h2>{context}</h2>
    <div className="row">{variants.map(variant=><Button key={variant} variant={variant}>{context} {variant}</Button>)}</div>
    <div className="row"><Button disabled>{context} disabled</Button><Checkbox disabled aria-label={context+' disabled checkbox'}/><Checkbox defaultChecked aria-label={context+' checked checkbox'}/></div>
    <div className="row"><button className="primary">{context} app primary</button><button className="secondary">{context} app secondary</button><button className="subtle">{context} app subtle</button><button className="chip active" aria-pressed="true">{context} selected chip</button></div>
    <Dialog><DialogTrigger asChild><Button variant="outline">{context} dialog</Button></DialogTrigger><DialogContent><DialogTitle>Color contract dialog</DialogTitle><DialogDescription>Shared foreground, background and overlay.</DialogDescription><label>Fixture input<input defaultValue="Editable"/></label></DialogContent></Dialog>
  </section>)}
</main>);
